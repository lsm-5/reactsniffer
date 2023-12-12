import { useCallback, useEffect, useState } from "react";
import { useGetArticles } from "../hooks/useGetArticles";
import { useGetEmoji } from "../hooks/useGetEmoji";
import { Articles } from "../types";
import { Navigation } from "../components/Navigation";

const styles = {
    container: {
        background: "#FEE2E2",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "10rem auto"
    },
    content: {}
};

const ArticleContent: React.FC = (props) => {
    // Step 1. calculate length as we need it to get corresponding emotion
    const [length] = useState(
        props.article.text.length + props.article.title.length
    );

    // Step 2. fetch emotion map from backend
    const emotions = useGetEmoji();

    // Step 3. set emotion once we get emotion map from backend
    const [emotion, setEmotion] = useState<string>("");
    useEffect(() => {
        if (emotions) {
            setEmotion(emotions["stickers"][length]);
        }
    }, [emotions, length]);

    return (
        <div>
            <div>
                <h2>
                    {
                        props.article.title
                    }
                </h2>
                <div>{props.article.text}</div>
            </div>
            <h3
                dangerouslySetInnerHTML={{
                    __html: `Total Length ${length} ${emotion}`
                }}
            />
        </div>
    );
};

const Incorrect: React.FC = () => {
    const articles = useGetArticles();
    const [currentArticle, setCurrentArticle] = useState();
    const onClickHandler = useCallback((article) => {
        setCurrentArticle(article);
    }, []);
    return (
        <div style={styles.container}>
            <Navigation articles={articles} onClickHandler={onClickHandler} />
            <div style={styles.content}>
                {currentArticle ? <ArticleContent article={currentArticle} /> : null}
            </div>
        </div>
    );
};

export default Incorrect;