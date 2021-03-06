import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export const Post = ({ post, getUserName, getPostComments, getPost, getAuthorPosts }) => {
  const comments = getPostComments(post);

  return (
    <View>
      <Text style={styles.textTitle}>{post.title}</Text>
      <Text style={styles.text}>{post.body}</Text>
      <Text style={styles.textAuthor}>
        Author: {getUserName(post)}
      </Text>

      <Button
        title='Show details'
        onPress={() => {
          getAuthorPosts(null)
          getPost(post)
          }}
      />

      <View style={styles.commentBlock}>
        <View >
          <Image
            style={styles.image}
            source={require('../../assets/gong.png')}
          />
        </View>
        <View
          style={comments.length === 0
                  ? styles.commentZero
                  : styles.comment
                }
        >
          <Text
            style={comments.length === 0
                    ? {color: 'lightgrey'}
                    : styles.commentText
                  }
          >
            {comments.length}
          </Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    textAlign: 'left',
    fontStyle: 'italic',
    margin: 5
  },
  textTitle: {
    width: '85%',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  textAuthor: {
    width: '95%',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    textTransform: 'capitalize',
    color: '#2089fb',
  },
  commentBlock: {
    position: 'absolute',
    right: 20,
    width: 25,
    height: 25,
  },
  comment: {
    position: 'absolute',
    right: -16,
    top: -8,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    backgroundColor: '#ed462f',
  },
  commentZero: {
    position: 'absolute',
    right: -16,
    top: -8,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    color: 'lightgrey',
  },
  commentText: {
    width: '95%',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    color: 'white',
  },
  image: {
    position: 'absolute',
    right: -10,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  }
});
