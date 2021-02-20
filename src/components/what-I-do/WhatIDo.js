import React from "react";
import "./whatIDo.scss";
import WhatIDoContent from "../../utils/WhatIDoContent";

import WhatIDoCards from "../what-I-do-cards/WhatIDoCards";

function WhatIDo() {
  const [content] = React.useState(WhatIDoContent);
  console.log(content);
  return (
    <div className="section">
      <div className="content-section">
        {content.map((item, i) => {
          return <WhatIDoCards key={i} {...item} />;
        })}
      </div>
    </div>
  );
}

export default WhatIDo;

// <div className="title-box">
// <h1>What I do</h1>
// <div className="line"></div>
// </div>
