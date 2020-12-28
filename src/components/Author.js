import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { getComments } from '../api/comments';
import { getPosts } from '../api/posts';
import { Post } from './Post';

export const Author = ({ author, getAuthorPosts, getPost }) => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const authorPosts = posts.filter(post => author.id === post.author);
  
  const getPostComments = (post) => {
    const postComments = comments.filter(comment => post.id === comment.post);

    return postComments;
  }

  const getData = async() => {
    const postData = await getPosts();
    setPosts(postData);

    const commentData = await getComments();
    setComments(commentData);

    setIsLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading
        ? <Text>Loading...</Text>
        : <View >
            <View style={styles.header}>
              <Button title='<-- BACK' onPress={() => getAuthorPosts(null)} />

              <Text style={styles.textAuthor}>
                Author: {author.username}
              </Text>
            </View>

            <Text style={styles.title}>Posts</Text>
            <FlatList
              data={authorPosts}
              renderItem={({item}) => (
                <View
                  style={styles.wrap}
                  key={item.id}
                >
                  <View>
                      <Post
                        post={item}
                        getUserName={() => author.username}
                        getPostComments={getPostComments}
                        getPost={getPost}
                      />
                      <Button
                        title='Show details'
                        onPress={() => {
                          getAuthorPosts(null)
                          getPost(item)
                          }}
                      />
                  </View>
                </View>
              )}
            />
          </View>
          }
    </View>
  )
};

const styles = StyleSheet.create({
  wrap: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'lightgrey',
    borderBottomRightRadius: 10,
    backgroundColor: '#f3f3f3',
    padding: 10,
    margin: 10,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  // button: {

  // },
  textAuthor: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#2089fb',
    textAlign: 'right',
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    marginTop: 30,
    padding: 10
  },
});
