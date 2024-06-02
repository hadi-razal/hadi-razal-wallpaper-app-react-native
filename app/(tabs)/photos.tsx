import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';


const Photos = () => {

    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://pixabay.com/api/?key=31421579-b15279b752b15d7e7200ce707&category=soccer')
            .then(response => response.json())
            .then(data => {
                setImages(data.hits);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.title}>Photos</Text>
                <FlatList

                    data={images}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: item.webformatURL }}
                                style={styles.image}
                            />
                            <Text style={styles.tags} numberOfLines={1} ellipsizeMode='tail'>Tags: {item.tags}</Text>
                        </View>
                    )}
                />
                <FlatList
                    horizontal
                    data={images}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: item.webformatURL }}
                                style={styles.image}
                            />
                            <Text style={styles.tags} numberOfLines={1} ellipsizeMode='tail'>Tags: {item.tags}</Text>
                        </View>
                    )}
                />
                <FlatList
                    horizontal
                    data={images}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: item.webformatURL }}
                                style={styles.image}
                            />
                            <Text style={styles.tags} numberOfLines={1} ellipsizeMode='tail'>Tags: {item.tags}</Text>
                        </View>
                    )}
                />
                <FlatList
                    horizontal
                    data={images}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: item.webformatURL }}
                                style={styles.image}
                            />
                            <Text style={styles.tags} numberOfLines={1} ellipsizeMode='tail'>Tags: {item.tags}</Text>
                        </View>
                    )}
                />
                <FlatList
                    horizontal
                    data={images}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: item.webformatURL }}
                                style={styles.image}
                            />
                            <Text style={styles.tags}>Tags: {item.tags}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>

    );
};

export default Photos;

const styles = StyleSheet.create({
    container: {
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 50,
        fontWeight: '600',
        fontFamily: "Poppins"
    },
    imageContainer: {
        width: 200,
        // height: 250,
        marginHorizontal: 3,
        paddingVertical: 5,
        borderRadius: 5
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
    tags: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        color: '#555',
    },
});
