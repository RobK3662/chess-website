import requests
import json 

url = 'https://api.chess.com/pub/leaderboards'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'}

def get_data_from_webpage(request_url, request_header):
    data_response = requests.get(request_url, headers=headers)
    return data_response.text

json_data_leaderboard = get_data_from_webpage(url, headers)
print(f'Top 50 Leaderboard: \n{json_data_leaderboard}')



data = json.loads(json_data_leaderboard)
chess_player_info_list = {}

opening_tag = "player_id"
closing_tag = "draw_count"

right_json_section = False

for key, value in data.items():
    if key == opening_tag:
        right_json_section = True
        user_info = {}
    if right_json_section:
        user_info[key] = value

    if key == closing_tag:
        right_json_section = False
        chess_player_info_list.append(user_info)

print(f"{chess_player_info_list}") #Leider gibt es hier noch eine leere Liste aus --> Muss noch so gefixt werden, dass sie die top 50 Spieler als einzelne Listen in dem dictionary gespeichert werden
# for user_info in chess_player_info_list:
    # print(user_info)''
