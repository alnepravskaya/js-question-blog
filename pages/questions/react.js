import { client } from '../../lib/utils';
import AnswersQuestions from '../../components/questions/AnswersQuestions/AnswersQuestions';
import { TYPESCRIPT_PAGE } from '../../graphQL/typescript';
import { REACT_PAGE } from '../../graphQL/react';

const ReactPage = (props) => <AnswersQuestions data={props.data} />;

export default ReactPage;

export async function getStaticProps() {
    const { data } = await client.query({
        query: REACT_PAGE,
    });

    return {
        props: {
            data: data.reactCollection.items,
        },
    };
}
