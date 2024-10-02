const Skill = (props) => {
    return(
        <>
        <em>{props.skillName} {props.percentage}</em>
        <div><div class={props.bgColor}></div></div>
        </>
    );
}

export default Skill;