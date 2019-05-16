
import ast
import xlsxwriter

workbook = xlsxwriter.Workbook('resultado.xlsx')
worksheet = workbook.add_worksheet()

keys = [
  '5c3f4e5b44496c5002706c43',
  '5c3f4e9f44496c5002706c49',
  '5c3f524b44496c5002706c4f',
  '5c3f544344496c5002706c55',
  '5c3fa4b944496c5002706c5b',
  '5c3ff06844496c5002706c61',
  '5c49c51c44496c5002706c67',
  '5c50747544496c5002706c6d',
  '5c50754b44496c5002706c73',
  '5c50762244496c5002706c79',
  '5c5077e444496c5002706c7f',
  '5c507a8244496c5002706c85',
  '5c50d63344496c5002706c8b',
  '5c50d9a444496c5002706c91',
  '5c51f2f044496c5002706c97',
  '5c51f2f144496c5002706c9b',
  '5c52ffe344496c5002706ca3',
  '5c538d3544496c5002706ca9' ]

row = 2

with open('./resultado-processado.json','r') as file:
	conteudo = ast.literal_eval(file.read())
	for key in keys:
		worksheet.write(row, 0, key)
		size = len(conteudo[key]['respostas'])
		for col in range(0,5):
			if(col<size):
				resposta = conteudo[key]['respostas'][col]
				worksheet.write(row, col+1, resposta['respostaIndex'])
		row = row + 1

workbook.close()