# -*- coding: utf-8 -*-
"""
Created on Thu May 16 16:56:54 2019

@author: AIRI
"""


import sqlite3
conn1 = sqlite3.connect('C:/Users/AIRI/Documents/Unreal Projects/ScriptEditor_UEVer/Content/Data/PyCode/SoundDB.db')
curs1 = conn1.cursor()


curs1.execute('SELECT * FROM Sound')
bb=curs1.fetchall()

for row in bb:
    
    rowID = row[0]
#    print(row[4])
    if row[6] != None:
        displayName = row[6] + '_' + row[7] + '_' + row[8]  
    elif row[5] != None:
        displayName = row[6] + '_' + row[7]
    else:
        displayName = row[6]
        
    intense = ''.join(i for i in row[1] if i.isdigit())
    
    for j in intense:
        displayName = displayName + '_' + j
#    if row[15] != '':
#        Name = displayName + '_' + row[11] + '_' + row[13] + '_' + row[15]
#    elif row[13] != '': 
#        Name = displayName + '_' + row[11] + '_' + row[13]
#    elif row[11] != '':
#        Name = displayName + '_' + row[11]
#    else:
#        Name = displayName
    curs1.execute("UPDATE Sound SET DisplayName=? WHERE id=?", (displayName,rowID))
    
conn1.commit()
conn1.close()
