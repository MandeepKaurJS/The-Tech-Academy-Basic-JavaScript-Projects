import re
import requests
from django.shortcuts import render
from bs4 import BeautifulSoup
from urllib.request import urlopen
from urllib.error import HTTPError

def get_top5(request):
    url = "https://www.stitcher.com/stitcher-list/get-js.php"
    data = requests.get(url).text
    titles = re.findall(r"[\n\r].*showName\":.\"\s*([^\n\r]*)\"", data)
    details = re.findall(r"[\n\r].*seouri\":.\"\s*([^\n\r]*)\"", data)
   
    top_five = {"podcasts": []}
    for index, title in enumerate(titles[:10]):
        top_five["podcasts"].append({"title": title, "details": details[index]})
    return render(request, "Podcast/podcast.html", top_five)
