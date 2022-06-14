import requests as r
import mariadb
import json
import os, sys

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
Ajouter votre logique en dessous ⬇️
"""
connection = connect_to_database()
print(connection)
print("Hello world ! 👋🏻")