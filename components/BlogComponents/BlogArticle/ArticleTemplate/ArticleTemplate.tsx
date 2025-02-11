import React from 'react';
import Template1 from './Template1/Template1';
import Template2 from './Template2/Template2';
import Template3 from './Template3/Template3';

const ArticleTemplate: React.FC<{ template: string }> = ({ template }) => {


  const renderTemplate = () => {
    switch (template) {
      case "1":
        return <Template1 />;
      case "2":
        return <Template2 />;
      case "3":
        return <Template3 />;
      default:
        return null;
    }
  };

  return <div>{renderTemplate()}</div>;
};

export default ArticleTemplate;
