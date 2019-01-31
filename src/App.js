import React, { Component } from 'react';
import './App.css';
import Images from './images.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import ImageCard from './components/ImageCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        images: images,
        unselectedImages: images
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectImage = image => {
        const findImage = this.state.unselectedImages.find(item => item.picture === picture);

        if(findImage === undefined) {
            this.setState({ 
                message: "You chose poorly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                images: images,
                unselectedImages: images
            });
        }
        else {
            const newImages = this.state.unselectedImages.filter(item => item.picture !== picture);
            
            this.setState({ 
                message: "You chose wisely!",
                curScore: this.state.curScore + 1,
                images: images,
                unselectedImages: newImages
            });
        }

        this.shuffleArray(images);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.images.map(image => (
                        <ImageCard
                            picture={image.picture}
                            image={image.image}
                            selectImage={this.selectImage} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;
