export const Title = ({title}) => {

    return (
        <div id="title">
            <h1>{title}</h1>
            <style jsx global>{`
                #title {
                    display: flex;
                    justify-content: center;
                    height: 10%;
                }

                h1 {
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}