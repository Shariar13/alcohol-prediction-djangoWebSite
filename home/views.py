import requests
from django.shortcuts import render
from django.views.generic import DetailView
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.shortcuts import render
from .models import FeedBack


def home1(request):
    return render(request, "index.html")

def home(request):
    return render (request, "page-1.html")

def feedback(request):
    if request.method == "POST":
        feedback = request.POST['feedback']
        feedback_database = FeedBack(feedback = feedback)
        feedback_database.save()
        return redirect ('thank_you')
    
def thank_you(request):
    return render(request, "page-3.html")



def loading_screen(request):
    return render(request, 'loading_sc.html')



from django.shortcuts import render
import openai

# Your OpenAI API key
api_key = "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"

def get_alcohol_suggestion(answers):
    # Create a prompt that simulates a conversation.
    prompt = f"User: Suggest me a real drink name with it's appromoxe price, type, bootle size, short description in my preferences region based on these preferences: Occasion: {answers['Occasion']}, Flavour: {answers['Flavour']}, Alcohol Type: {answers['Alcohol Type']}, Time: {answers['Time']}, Region: {answers['Region']}, Alcohol Volume: {answers['Alcohol Volume']}, Price Range: {answers['range1']} to Price Range: {answers['range2']}\nAI: "
    # Make a request to the ChatGPT API.
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=999,
        api_key=api_key
    )

#     response = openai.Completion.create(
#     model="text-davinci-003",  # Use the GPT-3.5 model
#     prompt=prompt,
#     max_tokens=999,
#     api_key=api_key
# )


    suggestion = response.choices[0].text

    # Initialize variables to store extracted information.
    drink_name = "Not available"
    price = "Not available"
    description = "Not available"

    # Search for keywords to extract drink name, price, and description.
    if "Drink Name:" in suggestion:
        drink_name_index = suggestion.index("Drink Name:")
        next_newline_index = suggestion.find("\n", drink_name_index)
        if next_newline_index != -1:
            drink_name = suggestion[drink_name_index + len("Drink Name:"):next_newline_index].strip()

    if "Price:" in suggestion:
        price_index = suggestion.index("Price:")
        next_newline_index = suggestion.find("\n", price_index)
        if next_newline_index != -1:
            price = suggestion[price_index + len("Price:"):next_newline_index].strip()

    if "Description:" in suggestion:
        description_index = suggestion.index("Description:")
        next_newline_index = suggestion.find("\n", description_index)
        if next_newline_index != -1:
            description = suggestion[description_index + len("Description:"):next_newline_index].strip()
    else:
        # If no keywords are found, use the entire response as the description.
        description = suggestion.strip()

    return drink_name, price, description

def alcohol_suggest(request):
    if request.method == "POST":
        # Get user answers from the form.
        occasion = request.POST.get("occasion", "")
        flavour = request.POST.get("flavour", "")
        alcohol_type = request.POST.get("alcohol-type", "")
        time = request.POST.get("drinking-time", "")
        region = request.POST.get("alcohol-region", "")
        volume = request.POST.get("food-pairing", "")
        rang1 = request.POST.get("rangeOne", "")
        range2 = request.POST.get("rangeTwo", "")

        # Create a dictionary to store user preferences.
        user_preferences = {
            "Occasion": occasion,
            "Flavour": flavour,
            "Alcohol Type": alcohol_type,
            "Time": time,
            "Region": region,
            "Alcohol Volume": volume,
            "range1": rang1,
            "range2": range2,
        }

        # Get the alcohol suggestion from ChatGPT.
        drink_name, price, description = get_alcohol_suggestion(user_preferences)

        return render(
            request, "generate.html", {
                "drink_name": drink_name,
                "price": price,
                "description": description,
                "preferences": user_preferences
            }
        )

    return render(request, "index.html")









