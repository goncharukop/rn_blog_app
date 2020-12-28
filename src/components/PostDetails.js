import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { getComments } from '../api/comments';
import { getUsers } from '../api/users';

export const PostDetails = ({ post, hidePost, getAuthor }) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const authorName = users.filter(user => user.id === post.author);
  
  const postComments = comments.filter(comment => post.id === comment.post);

  const getData = async() => {
    
    const userData = await getUsers();
    setUsers(userData);

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
            <View>
              <Text style={styles.textTitle}>{post.title}</Text>
              <Text style={styles.text}>{post.body}</Text>
            </View>

              <View style={styles.button}>
                <Button
                  title='<-- Back'
                  onPress={() => hidePost(null)}
                />
                
                <Text style={styles.textAuthor}>
                  Author: {authorName[0].username}
                </Text>

                <Button
                  title='All posts'
                  onPress={() => getAuthor(authorName[0])}
                  />
              </View>

            <Text style={styles.commentsTitle}>Comments</Text>
              <FlatList
                data={postComments}
                renderItem={({item}) => (
                  <View
                    style={styles.comment}
                    key={item.id}
                  >
                    <Text>{`>>  `}{item.body}</Text>
                  </View>
                )}
              />
          </View>
          }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    backgroundColor: '#f3f3f3',
    marginTop: '10%',
  },
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    margin: 15
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 20
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#2089fb',
    textAlign: 'right',
    padding: 5
  },
  commentsTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    marginTop: 30,
    padding: 10
  },
  comment: {
    borderRadius: 14,
    backgroundColor: '#e8e8e8',
    margin: 5,
    padding: 10,
  }
});
