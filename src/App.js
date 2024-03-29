import "./styles.css";
import { useState } from "react";

export default function App() {
    return (
        <div>
            <TextExpander>
                Space travel is the ultimate adventure! Imagine soaring past the
                stars and exploring new worlds. It's the stuff of dreams and
                science fiction, but believe it or not, space travel is a real
                thing. Humans and robots are constantly venturing out into the
                cosmos to uncover its secrets and push the boundaries of what's
                possible.
            </TextExpander>

            <TextExpander
                collapsedNumWords={20}
                expandButtonText="Show text"
                collapseButtonText="Collapse text"
                buttonColor="#ff6622"
            >
                Space travel requires some seriously amazing technology and
                collaboration between countries, private companies, and
                international space organizations. And while it's not always
                easy (or cheap), the results are out of this world. Think about
                the first time humans stepped foot on the moon or when rovers
                were sent to roam around on Mars.
            </TextExpander>

            <TextExpander expanded={true} className="box">
                Space missions have given us incredible insights into our
                universe and have inspired future generations to keep reaching
                for the stars. Space travel is a pretty cool thing to think
                about. Who knows what we'll discover next!
            </TextExpander>
        </div>
    );
}

function TextExpander({
    children,
    buttonColor = "",
    className = "",
    collapsedNumWords = 10,
    expanded = false,
    expandButtonText = "Show more",
    collapseButtonText = "Show less",
}) {
    // In the TextExpander function, { children, ...props } is using destructuring assignment
    //  to get the children prop and also gather the rest of the props into an object called props.
    //  This props object can then be used within the TextExpander component or passed to other components.

    const [isExpanded, setIsExpanded] = useState(expanded);
    const providedText = children.split(" ");
    const buttonText = isExpanded ? collapseButtonText : expandButtonText;
    // const displayedText = isExpanded
    //     ? providedText
    //     : providedText.slice(0, collapsedNumWords);
    const buttonStyle = {
        color: buttonColor,
        background: "none",
        border: "none",
        cursor: "pointer",
        font: "inherit",
        marginLeft: "5px",
    };

    const handleDisplayText = () => {
        const isExpandedBool = Boolean(isExpanded);
        if (isExpandedBool) {
            return providedText.join(" ");
        } else {
            return `${providedText.slice(0, collapsedNumWords).join(" ")}...`;
        }
    };
    /*If the children prop contains fewer than 10 words,
        the slice(0, collapsedNumWords) operation will simply return all the words.
        The slice method in JavaScript doesn't throw an error or exception
        if the end index is greater than the length of the array.
        Instead, it just returns the elements up to the end of the array.

        So, if children has less than 10 words,
        the handleDisplayText function will return all the words when isExpanded is false,
        and it will still return all the words when isExpanded is true.*/
    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div>
            <p className={className}>
                <span>{handleDisplayText()}</span>
                <button style={buttonStyle} onClick={handleButtonClick}>
                    {buttonText}
                </button>
            </p>
        </div>
    );
}
