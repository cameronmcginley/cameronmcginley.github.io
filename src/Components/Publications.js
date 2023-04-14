import React from "react";
import "../App.css";
import PublicationCard from "./PublicationCard";

const Publications = () => {
  return (
    <div name="Publications" className="section publications">
      <h2 className="underline">Publications</h2>
      <PublicationCard
        cardData={{
          title:
            "Convolutional Neural Network Optimization for Phishing Email Classification",
          link: "https://ieeexplore.ieee.org/abstract/document/9671531",
          author: "Cameron McGinley, Sergio A. Salinas Monroy",
          location: "2021 IEEE Interational Conference on Big Data",
          citationCount: 3,
          citationLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=12860478389443421757",
          description:
            "Phishing emails are one of the most common and effective tools that cybercriminals use to gain access to an organization’s network or personal information. To detect these attacks, email service providers use a variety of tools and indicators, such as the URLs that attackers include in their email messages. However, cybercriminals are able to bypass these detection techniques by omitting URLs in their messages and instead engaging victims in a conversation to advance their attacks. In this paper, we investigate the performance of convolutional neural network (CNN) models that identify phishing attacks by analyzing only the text in the email messages. The models take as input an embedding of the text in the email’s body and output a probability indicating the likelihood that the message is malicious. We evaluate several CNN architectures using real-world phishing emails and find that the best performing one can identify phishing attacks with an accuracy of 98.139%, recall of 98.125%, and precision of 98.269%.",
        }}
      />
    </div>
  );
};

export default Publications;
