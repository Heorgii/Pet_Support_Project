import { Helmet } from "react-helmet-async";
import { NewsComp } from '../components/NewsComp/NewsComp';
import { Section, Container } from 'components/baseStyles/CommonStyle.styled';

const News = () => {
    return (
        <div>
            <Helmet>
                <title>News</title>
            </Helmet>
            <Section>
        <Container>
            <NewsComp />
            </Container>
      </Section>
        </div>
    );
}

export default News;