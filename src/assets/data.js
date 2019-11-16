export default {
    "questions": [
        {
            "answerType": "text",
            "question": "Столица Украины?",
            "correctAnswer": "Киев",
            "userAnswer":"Киев",
            "image": "ukraine.jpg",
            "id": 1
        },
        {
            "answerType": "select",
            "question": "Какая национальная валюта в Украине?",
            "correctAnswer": "Гривна",
            "userAnswer":"Гривна",
            "image": "currency.jpg",
            "variants":["Евро","Рубль","Доллар","Гривна"],
            "id": 2
        },
        {
            "answerType": "radio",
            "question": "Какая была первая столица Украины?",
            "correctAnswer": "Харьков",
            "userAnswer":"Харьков",
            "image": "kharkov.jpg",
            "variants":["Одесса","Львов","Днепр","Харьков"],
            "id": 3
        },
        {
            "answerType": "checkbox",
            "question": "Какие реки протекают по територии Украины?",
            "correctAnswer": ["Лопань","Десна","Днепр"],
            "userAnswer":"",
            "image": "river.jpg",
            "variants":["Нил","Амазонка","Лопань","Десна","Днепр"],
            "id": 4
        },
        {
            "answerType": "select",
            "question": "Сколькими морями омывается Украина?",
            "correctAnswer": 2,
            "userAnswer":2,
            "image": "sea.jpg",
            "variants":[1,3,0,2],
            "id": 5
        }
    ]
}