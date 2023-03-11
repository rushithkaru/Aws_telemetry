from fpdf import FPDF
import psycopg2
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns
import os
import datetime as dt
import creds

#Class to generate a PDF report of sensor data::


class Generate:
    def __init__(self) -> None:
        pass

    def get_data(self,device,start,end):
        

        df = pd.DataFrame(columns=['DateTime','sensor_id','temp','cpu'])
        CONNECTION = creds.con_string

        with psycopg2.connect(CONNECTION) as conn:
                cursor = conn.cursor()
                
                
                next = start + dt.date.resolution
                query = "SELECT * FROM sensor_data WHERE time > '%s/%s/%s' AND sensor_id = %s;" % (start.year,start.month,start.day,str(device))
                
                
                cursor.execute(query)
                count = 0
                tableData = cursor.fetchall()
                data = []
                for ind in tableData:
                    data.append({'DateTime' : ind[0], 'sensor_id' : ind[1],'temp' : ind[2],'cpu' : ind[3]})

                df = pd.DataFrame.from_records(data)
                cursor.close()

        return df
        

    def create_graphs(self,device,start,end):
        
        df = self.get_data(device,start,end)   
        fig, ax = plt.subplots(figsize = (10, 5))
        sns.lineplot(data=df['temp'], color="g")
        ax2 = plt.twinx()
        sns.lineplot(data=df['cpu'], color="b", ax=ax2)
        plt.xlabel('Time')
        plt.ylabel('CPU %: Device ' + str(device))      
        plt.savefig('graphs/trial'+str(device)+'.png')
            


    def create_report(self,devices,start,end):
        pdf = FPDF('P','mm','Letter')
        pdf.add_page()
        pdf.set_font('helvetica', size=24)
        pdf.cell(180, 10, 'Sensor Data', 0, 1, 'C')
        pdf.set_font('helvetica', size=16)
        pdf.cell(180, 30,'Sensor data for selected devices: ' + start.strftime('%m/%d/%Y') + ' to ' + end.strftime('%m/%d/%Y'), 0, 1, 'C')
        
        for device in devices:
            self.create_graphs(device,start,end)
            pdf.image('graphs/trial'+str(device)+'.png', x=5, y=device*50, w=200, h=50)

        
        output_path = os.path.join(os.path.dirname(os.getcwd()), "my-app/public", "file1.pdf")
        pdf.output(output_path)   
        
    
    

    
