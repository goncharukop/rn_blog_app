import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { getComments } from '../api/comments';
import { getPosts } from '../api/posts';
import { getUsers } from '../api/users';
import { Post } from './Post';

export const PostsList = ({ getPost, getAuthorPosts }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserName = (post) => {
    const authorName = users.filter(user => user.id === post.author);

    return authorName[0].username;
  }

  const getPostComments = (post) => {
    const postComments = comments.filter(comment => post.id === comment.post);

    return postComments;
  }

  const getData = async() => {
    const userData = await getUsers();
    setUsers(userData);
    
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
        : <FlatList
            data={posts}
            renderItem={({item}) => (
              <View
                style={styles.wrap}
                key={item.id}
              >
                <Post
                  post={item}
                  getUserName={getUserName}
                  getPostComments={getPostComments}
                  getPost={getPost}
                  getAuthorPosts={getAuthorPosts}
                />
              </View>
            )}
          />
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
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10%',
  }
});
