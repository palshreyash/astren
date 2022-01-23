import React from 'react'
import { 
    View,
     Text, 
     SafeAreaView, 
     ScrollView,
     Dimensions 
    } from 'react-native'
import colors from '../config/colors';


const {height, width} = Dimensions.get('screen');

const UserPostsScreen = () => {
    return (


                <View style={{
                    flex: 1,
                    backgroundColor: colors.white
                }}>
                    <Text>User Posts
                        loramdadnojdanvoadn 
                        df oadngaodna
                        d padn gad\da d
                        adg dg
                        Whether this screen should be lazily rendered. When this is set to true, the screen will be rendered as it comes into the viewport. By default all screens are rendered to provide a smoother swipe experience. But you might want to defer the rendering of screens out of the viewport until the user sees them. To enable lazy rendering for this screen, set lazy to true.
                        When you enable lazy, the lazy loaded screens will usually take some time to render when they come into the viewport. You can use the lazyPlaceholder prop to customize what the user sees during this short period.
                    </Text>
                </View>

    )
}

export default UserPostsScreen;
