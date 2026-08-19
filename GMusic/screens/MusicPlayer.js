import React from "react"
import { StyleSheet, text, view } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import colors from '../theme/colors';

export default function MusicPlayer() {
    return(
        <SafeAreaView style={styles.conatiner}>
            <view style={styles.content}>
            <text style={styles.eyebrow}>TOCANDO AGORA</text>
            <text style={styles.tittle}>Gmusic</text>
            <text style={styles.description}>
                Nosso player começa aqui
                </text>
            </view>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})