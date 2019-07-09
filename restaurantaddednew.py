
import re
import requests
from django.shortcuts import render
import json
# Create your views here.
def get_top10(request):
    api_key="xOM7Blat-aEandu_HcS_p0l01LI71bkFltgP4Ppk0yIiB2UjYGyw6nqgAt1sbCC9wtLcJ35EyzZjEsdZlk39JhZo5Bf7bHweDZaowRY6M9egK4KR_Z_QJ3T4msYTXXYx"
    headers = {'Authorization': 'Bearer %s' % api_key}
    url='https://api.yelp.com/v3/businesses/search'

    # In the dictionary, term can take values like food, cafes or businesses like McDonalds
    params = {'term':'seafood','location':'New York City'}
    req = requests.get(url, params=params, headers=headers)

    parsed = json.loads(req.text)

    businesses = parsed["businesses"]
    #items={}
    #items={"bussinesses":[]}
    return render(request,'Restaurant/restaurant.html',{"results":businesses[:10]})

    #id = business["id"]

    '''url = "https://api.yelp.com/v3/businesses/" + id + "/reviews"

        req = requests.get(url, headers=headers)

        parsed = json.loads(req.text)

        reviews = parsed["reviews"]

        #print("--- Reviews ---")
        for review in reviews:
            reviews.render("User:", review["user"]["name"], "Rating:", review["rating"], "Review:", review["text"], "\n")'''




