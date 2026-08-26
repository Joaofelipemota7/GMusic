import React, { useState } from 'react'
import { 
    FlatList,
    Image,
    StyleSheet,
    Text,
    useWindowDimensions,
    View 
    } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import{ songs } from '../model/data';
import colors from '../theme/colors';

export default function MusicPlayer() {
    const { width } =useWindowDimensions();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const currectSong =songs[selectedIndex];
    const artworkSize = Math.min(width - 40, 380);
    
    function handleMomentumEnd(event) {
        const offset = event.nativeEvent.contentOffset.x;
        const index = Math.round(offset / width);
        setSelectedIndex(index);
    }

    function renderArtwork({ item }) {
        return (
            <View style={[styles.artWorkPage, { width }]}>
                <Image
                source={item.artwork}
                style={[styles.artwork,
                    {width: artworkSize,heught: artworkSize },
                ]}
                />
            </View>
        )
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>TOCANDO AGORA</Text>
        <Text style={styles.counter}>
          {selectedIndex + 1} de {songs.length}
        </Text>
        </View>

        <FlatList 
          data={songs}
          horizontal
          pagingEnabled
          renderItem={renderArtwork}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollBegin={}
        />

      <View style={styles.metadata}>
        <Text style ={styles.songTitle}>{currectSong.title} </Text>
        <Text style ={}></>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems
  }


  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8
  },
counter: {
  color: colors.textSecondary,
  fontSize: 12,
},
  title: {
    marginTop: 8,
    color: colors.text,
    fontSize: 32,
    fontWeight: 800,
  },
  description: {
    marginTop: 10,
    color: colors.textSecondary,
  },
  artWorkPage: {
    alignItems: 'center',
    justifyContent:'center',
  },
  artwork: {
    borderRadius: 24,
  },
  metadata: {
    minHeight: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  songTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center'
  },
  songArtist: {
    marginTop: 6,
    color: colors.textSecondary,
    fontSize: 14,
  }

})