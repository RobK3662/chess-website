import requests
import json
import sqlite3 

url = 'https://api.chess.com/pub/leaderboards'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'}

def get_data_from_webpage(request_url, request_header):
    data_response = requests.get(request_url, headers=headers)
    return data_response

data_leaderboard = get_data_from_webpage(url, headers)
# print(f'Top 50 Leaderboard: \n{data_leaderboard.text}')



#SQLITE
leaderboard_data_as_json = data_leaderboard.json()
#neue Datenbankverbindung herstellen (Neue Datenbank wird von selbst erstellt)
conn = sqlite3.connect("chess_data.db")
#cursor-Objekt nötig um abfragen zu erstellen und Daten temporär in dem Objekt zu speichern
cursor = conn.cursor()

#Innerhalb SQLite-Datenbank, Tabelle erstellen
# Schleife über die verschiedenen Chess-Kategorien in der API-Antwort
for category, player_data_list in leaderboard_data_as_json.items():
    # Überprüfen, ob die Kategorie Spielerdaten enthält
    if isinstance(player_data_list, list):
        # Tabelle für die Kategorie erstellen, falls sie nicht vorhanden ist
        cursor.execute(f"""
            CREATE TABLE IF NOT EXISTS chess_{category} (
                player_id INT PRIMARY KEY,
                username TEXT,
                score INT,
                rank INT,
                country TEXT,
                title TEXT,
                name TEXT,
                status TEXT,
                avatar TEXT,
                trend_score_direction INT,
                trend_score_delta INT,
                trend_rank_direction INT,
                trend_rank_delta INT,
                flair_code TEXT,
                win_count INT,
                loss_count INT,
                draw_count INT
            )
        """)

        # Daten für alle Spieler in der Kategorie in die Tabelle einfügen oder aktualisieren
        for player_data in player_data_list:
            cursor.execute(f"""
                INSERT OR REPLACE INTO chess_{category} (
                    player_id, username, score, rank, country, title, name, status, avatar, flair_code, 
                    win_count, loss_count, draw_count
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                player_data["player_id"],
                player_data["username"],
                int(player_data["score"]),  # Um sicherzustellen, dass die Werte als Ganzzahlen gespeichert werden
                int(player_data["rank"]),
                player_data.get("country", ""),  # Falls "country" nicht vorhanden ist, wird ein leerer String verwendet
                player_data.get("title", ""),    # Falls "title" nicht vorhanden ist, wird ein leerer String verwendet
                player_data.get("name", ""),     # Falls "name" nicht vorhanden ist, wird ein leerer String verwendet
                player_data["status"],
                player_data["avatar"],
                player_data.get("flair_code", ""),  # Falls "flair_code" nicht vorhanden ist, wird ein leerer String verwendet
                player_data["win_count"],
                player_data["loss_count"],
                player_data["draw_count"]
            ))

# Transaktion bestätigen und die Verbindung schließen
conn.commit()
conn.close()

#daily leaderboard get
def get_daily_leaderboard():
    conn = sqlite3.connect("chess_data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM chess_daily;")
    results = cursor.fetchall()
    #Ergebnisse ausgeben
    for row in results:
        filtered_row = [cell for cell in row if cell is not None] #Da leider ein paar Werte als None gespeichert wurden muss hier eine filterung vorgenommen werden
        print(filtered_row)
    conn.close()

daily_leaderboard_table = get_daily_leaderboard()

#daily960 leaderboard get
def get_daily960_leaderboard():
    conn = sqlite3.connect("chess_data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM chess_daily960;")
    results = cursor.fetchall()
    #Ergebnisse ausgeben
    for row in results:
        filtered_row = [cell for cell in row if cell is not None]
        print(filtered_row)
    conn.close()

daily960_leaderboard_table = get_daily960_leaderboard()

#live_rapid leaderboard get
def get_live_rapid_leaderboard():
    conn = sqlite3.connect("chess_data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM chess_live_rapid;")
    results = cursor.fetchall()
    #Ergebnisse ausgeben
    for row in results:
        filtered_row = [cell for cell in row if cell is not None]
        print(filtered_row)
    conn.close()

live_rapid_leaderboard_table = get_live_rapid_leaderboard()

#live_blitz
def get_live_blitz_leaderboard():
    conn = sqlite3.connect("chess_data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM chess_live_blitz;")
    results = cursor.fetchall()
    #Ergebnisse ausgeben
    for row in results:
        filtered_row = [cell for cell in row if cell is not None]
        print(filtered_row)
    conn.close()

live_blitz_leaderboard_table = get_live_blitz_leaderboard()

#live_bullet
def get_live_bullet_leaderboard():
    conn = sqlite3.connect("chess_data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM chess_live_bullet;")
    results = cursor.fetchall()
    #Ergebnisse ausgeben
    for row in results:
        filtered_row = [cell for cell in row if cell is not None]
        print(filtered_row)
    conn.close()

live_bullet_leaderboard_table = get_live_bullet_leaderboard()

# data = json.loads(json_data_leaderboard)
# chess_player_info_list = {}

# opening_tag = "player_id"
# closing_tag = "draw_count"

# right_json_section = False

# for key, value in data.items():
#     if key == opening_tag:
#         right_json_section = True
#         user_info = {}
#     if right_json_section:
#         user_info[key] = value

#     if key == closing_tag:
#         right_json_section = False
#         chess_player_info_list.append(user_info)

# print(f"{chess_player_info_list}") #Leider gibt es hier noch eine leere Liste aus --> Muss noch so gefixt werden, dass sie die top 50 Spieler als einzelne Listen in dem dictionary gespeichert werden
# # for user_info in chess_player_info_list:
#     # print(user_info)''
