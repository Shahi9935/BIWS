import pandas as pd

# Load the Excel file
excel_file = 'BIWS-Questions.xlsx'
df = pd.read_excel(excel_file)

# Save as a pipe-delimited file
pipe_delimited_file = 'BIWS-Temp.txt'
df.to_csv(pipe_delimited_file, sep='@', index=False)

print(f"File saved as {pipe_delimited_file}")