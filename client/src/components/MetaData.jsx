import { Helmet } from 'react-helmet-async';

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Black Bear Espresso </title>
    </Helmet>
  );
};
export default MetaData;
