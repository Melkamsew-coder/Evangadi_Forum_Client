import React, { useContext, useEffect, useState } from 'react'
import { AppState } from '../../App'
import { Link } from 'react-router-dom'
import axios from '../../Api/axiosConfig'
import classes from "./home.module.css";

const Home = () => {
  const { user } = useContext(AppState);
  const [questions, setquestions] = useState([]);
  const token = localStorage.getItem("token");

  async function fetchData() {

    try {
      const {data} = await axios.get("/questions/all-questions", {
        headers: { Authorization: "Bearer " + token }, // Custom headers
      });
      
      const allQuestions = data?.questions
      setquestions(allQuestions)
      
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  // console.log(questions);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className={classes["main-container"]}>
        <div className={classes["welcome-section"]}>
          <Link to={"/ask"} className={classes["ask-question-btn"]}>
            Ask Question
          </Link>
          <div className={classes["welcome-message"]}>
            Welcome :
            <span className={classes["username"]}> {user.username}</span>
          </div>
        </div>

        <div className={classes["search-bar"]}>
          <input
            type="text"
            className={classes["search-input"]}
            placeholder="Search question"
          />
        </div>

        {questions.length > 0 ? (
          <div>
            {questions?.map((e, i) => (
              <Link
                to={`/question/${e.questionid}`}
                className={classes["questions-list"]}
              >
                <div className={classes["question-item"]}>
                  <div className={classes["user-info"]}>
                    <div className={classes["user"]}>
                      <div className={classes["user-avatar"]}>👤</div>
                      <p>{e.username}</p>
                    </div>
                    <div className={classes["question-text"]}>{e.title}</div>
                  </div>
                  <div className={classes["arrow"]}>➤</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No questions asked yet.</p>
        )}
      </div>
    </section>
  );
}

export default Home