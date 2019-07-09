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
    images_tags = re.findall(r"[\n\r].*imageURL\":.\"\s*([^\n\r]*)\"", data)
    #showing some more details
    category = re.findall(r"[\n\r].*category\":.\"\s*([^\n\r]*)\"", data)
    #getting delta value
    delta = re.findall(r"[\n\r].*delta\":.\"\s*([^\n\r]*)\"", data)
    #getting rank
    rank = re.findall(r"[\n\r].*rank\":.\"\s*([^\n\r]*)\"", data)
    #choose html.parser for getting image
    #soup=BeautifulSoup(data,'html.parser')
    #find image tag into source page
    #images_tags=soup.findAll('imageURL')
    #src=images_tags.get('src')
    top_five = {"podcasts": []}
    for index, title in enumerate(titles[:10]):
        top_five["podcasts"].append({"title": title, "details": details[index],"image":images_tags[index],"category":category[index],"delta":delta[index],"rank":rank[index]})
    return render(request, "Podcast/podcast.html", top_five)
