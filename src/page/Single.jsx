import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";
import Proflie from "../img/chain.jpg";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img src={Proflie} alt="" />
          <div className="info">
            <span>Chain</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>5 tips on how to be fluent in English within 60 days</h1>
        <p>
          It is the dream of every English learner to become as fluent as a
          native English speaker within a short period of English learning.
          Being fluent in English goes beyond just having a wealth of knowledge
          of English grammar and vocabulary it has to transfer from your head to
          your mouth. Even though it seems so far-fetched and unachievable
          fluency in English within a short period is achievable regardless of
          your English learning differences, just follow these tips to become
          fluent in English within 60 days. <br></br>
          <br></br>Practice everyday: Do not catch a break if you must achieve
          fluency, set a goal for things to practice every day. Remember the
          saying “practice makes perfect” you can’t become better at something
          until you put in the work. Speak your native language less and speak
          the English language more daily. Speak to yourself, forget about
          people thinking you are silly, we are trying to achieve a goal here.
          Setting a practice schedule will make it easier for you to learn. Find
          your community of friends who like English: Now is the time to put
          your social skills to good use, you h
        </p>
      </div>

      <Menu />
    </div>
  );
}
export default Single;
