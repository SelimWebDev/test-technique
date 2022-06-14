import requests as r
import mariadb
import json
import os, sys
from bs4 import BeautifulSoup

"""
Fonction permettant de récupérer l'URL SensCritique d'un animé
⚠️ Ne pas toucher à cette fonction, elle vous sera utile.
"""
def get_sc_anime_url(anime_name):
    url = f'https://www.senscritique.com/sc2/search/autocomplete.json?query={anime_name}'
    headers = {
        "x-requested-with": "XmlHttpRequest"
    }
    result = r.get(url, headers=headers)
    content_in_json = json.loads(result.content)
    first_result = None
    if len(content_in_json['json']) > 0:
        first_result = content_in_json['json'][0]['url']

    return first_result


"""
Connexion à la base de données
⚠️ Ne pas toucher à cette fonction, elle vous sera utile.
"""
def connect_to_database():
    try:
        connection = mariadb.connect(
            host=os.getenv("DATABASE_HOST"),
            port=int(os.getenv("DATABASE_PORT")),
            user=os.getenv("DATABASE_USER"),
            password=os.getenv("DATABASE_PASSWORD"),
            database=os.getenv("DATABASE_NAME")
        )
        return connection
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)

"""
Recupération des notes senscritique
"""
def get_sc_anime_rating(url):
    if(url == None):
        return None
    else:
        url = url
        headers = {
            "x-requested-with": "XmlHttpRequest"
        }
        htmlPage = r.get(url, headers=headers)
        soup = BeautifulSoup(htmlPage.content, "html.parser")
        rating = soup.find("div", class_="fNqmsn").text
        return rating

"""
Ajouter votre logique en dessous ⬇️
"""
allTitle = []
allScUrl = []

connection = connect_to_database()
cursor = connection.cursor()
cursor.execute("SELECT title FROM animes;")

"""
on retient les 5 premiers titres
"""
i = 0
for row in cursor:                      
    allTitle.append(row[0])         
    i += 1
    if(i==5):
        break

connection.close()

"""
on recupère l'url sc pour chaque titre
"""
for title in allTitle:
    scUrl = get_sc_anime_url(title)
    allScUrl.append(scUrl)

"""
pour chaque url on récupère l'htlm et le parse pour la note 
"""
allRating = []
for url in allScUrl:
    rating = get_sc_anime_rating(url)
    allRating.append(rating)

print(allRating)
