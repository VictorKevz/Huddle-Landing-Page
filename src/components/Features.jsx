import React from "react";
import growIMG from "../assets/images/illustration-grow-together.svg";
import convoIMG from "../assets/images/illustration-flowing-conversation.svg";
import usersIMG from "../assets/images/illustration-your-users.svg";
import "./css/feature.css";

function Features() {
  return (
    <section className="features-container">
      <div className="feature grow">
        <div className="grow text">
          <h2>Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.{" "}
          </p>
        </div>
        <div className="grow image">
          <img
            src={growIMG}
            alt="illustration-grow-together-image"
            className="grow-image"
          />
        </div>
      </div>

      <div className="feature convo">
        <div className="convo image">
          <img
            src={convoIMG}
            alt="illustration-flowing-conversation-image"
            className="convo-image"
          />
        </div>
        <div className="convo text">
          <h3>Flowing Conversations</h3>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>

      <div className="feature users">
        <div className="users text">
          <h4>Your Users</h4>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div className="users image">
          <img
            src={usersIMG}
            alt="illustration-your-users-image"
            className="users-image"
          />
        </div>
      </div>
    </section>
  );
}
export default Features;
