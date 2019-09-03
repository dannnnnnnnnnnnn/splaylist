import React from 'react';
import Track from '../Track/Track';
import './TrackList.css'

class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const tracks = this.props.tracks.map(track => {
            return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>;
        });
        return (
        <div class="TrackList">
            {tracks}
        </div>
        )
    }
}
export default TrackList;