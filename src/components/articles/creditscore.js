import React from "react";
import { Container, Header } from "semantic-ui-react";

const CreditScore = () => (
    <Container text>
        <Header as="h1">5 ways to improve your credit score</Header>
        <div className="ui huge image">
            <img alt="" src={require('../img/cards.jpg')} />
            <h6>Photo by Avery Evans on Unsplash</h6>
        </div>

        <p>
            As a recent college graduate, I was clueless about personal finances such as the importance of a credit score, 
            retirement accounts like 401k and Roth IRA, stocks, and investments. When I applied for my first apartment, 
            I realized how my credit score played a role. Since then, I started to get fascinated with personal finances, 
            so I looked into online resources and watched many youtube videos. When I spoke to my friends and family about 
            personal finances, I noticed that the topic might be tedious or intimidating to some. I am not a financial expert, 
            but I believed that credit scores are important and more people should be aware of how it works.
        </p>
        <Header as="h3">What is a credit score?</Header>
        <p>A credit score is a number that represents your financial health and risk.</p>
        <div className="ui huge image">
            <img alt="" src={require('../img/ficoscore.png')}/>
            <h6>Credit score breakdown by FICO®</h6>
        </div>
        <p>
            Your credit score is made up of 5 factors. The biggest factor is your <b>payment history</b>, which looks at the number 
            of times you paid your bills on time. The second biggest factor is the <b>amount owed</b>; this refers to the amount due 
            in your monthly statement. The third biggest factor is <b>credit history</b>; this refers to how long you had your first 
            credit card. Lastly, both <b>new credit</b> and <b>credit mix</b> carry the same weight; New credit refers to how many new credit 
            cards are opened at a given amount of time, and credit mix refers to how much credit and debits the person carries.
        </p>
        <Header as="h3">How can I found out my credit score?</Header>
        <p>
            You don’t need to pay to get your credit score; there are many ways to get your score for free. Usually, major banks 
            can check your credit score for free. Here are a few other ways to get your score.
        </p>
        <div className="ui ordered list">
            <a className="item" href="https://www.creditkarma.com/">Credit Karma</a>
            <a className="item" href="https://www.nerdwallet.com/l/free-credit-score">NerdWallet</a>
            <a className="item" href="https://www.experian.com/consumer-products/free-credit-report.html">Experian</a>
        </div>
        <p>
            Once you know your score, use the following diagram to determine where your score falls.
        </p>
        <div className="ui huge image">
            <img alt="" src={require('../img/creditscore.png')}/>
            <h6>FICO® Credit Scores by MyBankTracker.com</h6>
        </div>
        <Header as="h3">Why should I improve my credit score?</Header>
        <div className="ui bulleted list">
            <div className="item"><b>More housing options</b>: when it comes to buying a house or renting an apartment, the credit score plays 
            a huge role in determining who gets the lease. For example, when you apply for an apartment, the renter needs how likely 
            you are to pay rent each month. Keep in mind that there are other applicants, so having a high credit score helps you stand 
            out from the crowd.</div>
            <div className="item"><b>Lower interest rates</b>: a good credit score can get you better rates for loans and insurances.</div>

            <div className="item"><b>Better credit cards</b>: higher credit scores can get you access to better credit cards, helping you save 
            money. For example, premium credit cards come with great rewards and services such as purchase protection and travel insurance.</div>
        </div>
        <Header as="h3">Number 1: Always pay off monthly payments</Header>
        <p>
            This method is a no brainer considering that payment history accounts for 35% of your credit score. If you make a 
            payment 30 days late, then the late payment will stay on your report for 7 years.
        </p>
        <Header as="h3">Number 2: Don’t spend more than 10% of your credit limit</Header>
        <p>
            It would be best if you never maxed out or go over your credit limit. Before each statement closing date, make sure 
            you are only using 10% of the credit limit. For example, if your credit limit is $1000, your monthly statement amount 
            should be under $100. This method doesn’t mean you can only spend $100 if you have a $1000 credit limit. If you 
            spend $500 in one month, you should pay $400 before the closing date. Paying off the debt to meet the 10% utilization will 
            allow you to get rewards like cashback and boost your credit score.
        </p>
        <Header as="h3">Number 3: Apply for more credit cards</Header>
        <p>
            It sounds kind of counterintuitive for someone to get more credit cards when trying to improve their score because of debt. 
            By opening more credit cards can help increase your credit line, which means more utilization.
        </p>
        <Header as="h3">Number 4: Get your first credit card early</Header>
        <p>
            Don’t wait until after college to get your first credit card. Opening up a new credit card early on can help the credit length 
            portion of your score.
        </p>
        <Header as="h3">Number 5: Fix any inquiries or errors (if you have any)</Header>
        <p>
            If you have any late payments or errors on record, try to get it removed. Some inquiries could be reported by mistake, so it helps 
            to check your credit from time to time. If you have late payments, it’s worth a shot to ask the lender to remove it.
        </p>
        <Header as="h3">References</Header>
        <div className="ui ordered list">
            <a className="item" href="https://www.myfico.com/credit-education/whats-in-your-credit-score">What's in my FICO® Score?</a>
            <a className="item" href="https://www.youtube.com/watch?v=Vn9ounAgG3w">How To Get A PERFECT Credit Score For $0</a>
            <a className="item" href="https://www.youtube.com/watch?v=N6QdxWyP8HI">How To Fix A BAD Credit Score ASAP</a>
        </div>
    </Container>
);

export default CreditScore;
