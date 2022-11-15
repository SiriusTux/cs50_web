people= [
    {'name': 'Harry', 'house': 'Griffondor'},
    {'name': 'Cho', 'house': 'Ravanclaw'},
    {'name': 'Draco', 'house': 'Slytherin'}
]

people.sort(key=lambda person: person['name'])

print(people)