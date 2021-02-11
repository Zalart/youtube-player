class VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            itemName: "Rick Astley - Never Gonna Give You Up (Video)"
        }
        handleStateChange = (elem) => {
            // const videoUrl = this.state.videoUrl;
            // const itemName = this.state.itemName;
            const result = data.find((el) => el.id == elem.target.id);
            this.setState(result.videoUrl, result.itemName);
        }

        render() {
            return (
                <button onClick={this.handleStateChange}>
                    {this.state.count}
                </button>
            );
        }

    }
}

export default VideoCard;

/* const clickHandler = (e) => {
    const res = data.results.find((el) => el.id == e.target.id);
    setState(res.name);
}; */