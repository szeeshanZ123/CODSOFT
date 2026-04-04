# 🚢 Titanic Survival Prediction

## 📌 Project Overview
This project aims to predict whether a passenger survived the Titanic disaster using machine learning techniques. The dataset contains information such as age, gender, ticket class, fare, and more.

---

## 📊 Dataset
The dataset includes the following features:
- PassengerId
- Pclass (Ticket Class)
- Name
- Sex
- Age
- SibSp (Siblings/Spouses aboard)
- Parch (Parents/Children aboard)
- Ticket
- Fare
- Embarked
- Survived (Target Variable)

---

## 🧹 Data Preprocessing
- Removed **Cabin** column due to excessive missing values  
- Filled missing values in **Age** using median  
- Filled missing values in **Embarked** using mode  
- Converted categorical data into numerical format  

---

## 📈 Exploratory Data Analysis (EDA)
- Analyzed survival distribution  
- Compared survival based on gender and passenger class  
- Visualized age distribution  
- Generated correlation heatmap  

---

## 🤖 Machine Learning Model
- Model Used: **Logistic Regression**  
- Data split into training and testing sets (80/20)  
- Trained model using Scikit-learn  

---

## 📊 Model Performance
- **Accuracy:** ~81%  
- Evaluated using:
  - Accuracy Score  
  - Confusion Matrix  
  - Classification Report  

---

## 🔍 Key Insights
- Females had a higher survival rate than males  
- Passengers in higher classes had better survival chances  
- Age and fare also influenced survival  

---

## 🛠️ Tools & Technologies
- Python  
- Pandas  
- NumPy  
- Matplotlib  
- Seaborn  
- Scikit-learn  

---

## 🚀 Conclusion
The model successfully predicts survival with good accuracy. This project demonstrates the complete data science workflow including data cleaning, visualization, and machine learning.

---

## 📂 Repository Structure
