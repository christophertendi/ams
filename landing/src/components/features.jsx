import React from "react";

export const Features = (props) => {
  const styles = {
    featureItem: {
      textAlign: "center",
      margin: "-5px auto", 
    },
    featureIcon: {
      fontSize: "3em",
      marginBottom: "10px",
    },
    featureTitle: {
      fontSize: "1.5em",
      marginTop: "10px",
    },
    featureText: {
      fontSize: "1em",
      marginTop: "10px",
    },
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Visi & Misi</h2>
        </div>
        <div className="row justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-md-6 d-flex flex-column align-items-center"
                  style={styles.featureItem}
                >
                  <i className={d.icon} style={styles.featureIcon}></i>
                  <h3 style={styles.featureTitle}>{d.title}</h3>
                  <p style={styles.featureText}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
