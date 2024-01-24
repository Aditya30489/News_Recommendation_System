NewsScraping

Our main motivation behind this project was to be able to have a deep dive into fields like data scraping, natural language processing and deep learning models.

NEWS SCRAPING USING NewsAPI and Spyder
Using BERT and K-NN Algo to give user recommendations
  
In this project we have implemented a model which inculcates various applications of Artificial Intelligence into one. It consists of web scraping and subsequent data collection using Crawlers and NewsAPI’s, Transformer model such as BERT, clustering algorithms such as K-means and finally a frontend framework using ReactJS to recommend news articles to the end user.

Key Pointers
A Recommender System basically analyzes reader’s past article history and reading behaviour to suggest any future articles they might be inclined to read .
Utilising the power of Scrapy and NewsAPI to extract news articles from famous agencies such as Hindustan Times , Reuters, BBC and CNN we preprocessed the extracted data which was then finally passed into the BERT model.
A similarity measure was then used to find the cosine similarity between the outputs of the BERT model , and then concluded by by applying clustering techniques to recommend articles.

I have created inline links all across the README Doc for anyone looking to understand the code with clearer comprehension.

How to understand the flow of the code?
Through the projects life cycle, we used ReactJS, Google Colab and Jupyter Notebook for the work. ReactJS for Showing news and reading news, Google Colab for NewsAPI, and Jupyter for BERT and KNN implementation. Some things to understand are:

First we used ReactJs for front-end part which includes login , SignUp and Showing news and for collecting history of user.

Then on Google Colab, we used NewsAPI and FeedParser to take out news articles in masses, afterwhich we used Pandas Libraries to store all the articles with the necessary documentation into CSV files.

All the data was then stored into CSV files, and then we headed to Jupyter Notebook where implemented BERT Algo on it, which provided us the cosine similarities between articles.

We transported the cosine similarities into a KNN algo, but also had an alternate manual approach, the google colab code for which is attached to the repository.

The code is straight and simple, and is one of the million ways we can use BERT as a tangible application in todays world.
