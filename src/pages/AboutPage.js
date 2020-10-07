import React from 'react';
import Content from '../components/content';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function AboutPage(props){

    return(
        <div className="aboutmeDisplay">
            <Content>
               <Row className="aboutmeRow" >
               <Col>
                    <img src='/images/thandi.jpeg' height="150px"></img>
                   
                </Col>
                <Col>
                    <h1>About Me</h1>
                <p> My greatest strengths are
                    creating databases using MySQL, Java programming, C++
                    programming, data analytics, also able to analyse and come up with the
                    best plan of an action.
                    </p>
                    </Col>
                </Row>
                <Col>
                <p>Skills & Abilities</p>
                <p>
                    <ul>
                        <li>
                        <p>Sql (database management, data extraction & Manipulation)</p>
                        </li>
                        <li>
                        <p>Java, R (data manipulation with dplyr, graphical display with
                            ggplot2, machine learning with packages including RandomForest,
                            Knn, Naïve Bayes, SVM, Logistic regression, K-means & hidden
                            Markov)</p>
                        </li>
                        <li>
                        C++ (Software development and engineering) 
                        </li>
                        <li>
                        Excel (data visualization & dashboards automation)
                        </li>
                        <li>
                         C#
                        </li>
                        <li>
                        Networks (configuring, maintaining networks, maintaining servers,
                        router, and PCs) 
                        </li>
                    </ul>
                </p>

                <h1>EDUCATION</h1>
                <ul>
                    <li>North West University - Northwest
                        B.Sc. (Information technology), Current student
                        Final year
                        </li>
                    <li>Tsebo Secondary School – Witsieshoek
                                Matric (Grade 12), 2016</li>
                
                </ul>

                <h1>Hobbies</h1>
                <li>Playing chess and reading</li>
                </Col>
            </Content>
        </div>
    );

}

export default AboutPage;