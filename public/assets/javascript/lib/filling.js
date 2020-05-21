
const setFillings = () => {
    $('.filling').each( function(index) {
        //this is a test for hsl colours
        const color = $('.title').css('background-color');
        console.log(color);
        //the jQuery object of each filling
        const filling = $( this );
        //gives a random width
        const width             = randomiseProperty(filling, { property:'width' ,adjustment:0.1, });
        const radius            = randomiseProperty(filling, { property:'border-radius', adjustment:3, });
        const backgroundColor   = colourPicker(filling);
        const textColour        = getContrast(backgroundColor);
        
        const CSS = {
            'width':width,
            'border-radius':radius,
            'backgroundColor':backgroundColor,
            'color':textColour
        }

        $( filling ).css(CSS)
    });
} 


//TODO: will need to scale burger sizes so long words don't go out of the max-width

//TODO: devoured mask will have bites out of it, by overlaying circles with the same background colour as the body. 
//TODO: this mask will also have a text over lay (on an angle 30degree, like a red stamp called Devoured!)


//TODO: re-size the input to make longer
//TODO: change input colours for more impact
