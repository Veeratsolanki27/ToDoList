import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { blue, green, pink, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
  card: {
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    border: '1px solid #f0f0f0',
    backgroundColor: '#ffffff'
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'work') return yellow[700]
      if (note.category === 'money') return green[500]
      if (note.category === 'todos') return pink[500]
      return blue[500]
    }
  }
})

function NoteCard({ note, onDelete }) {
  const classes = useStyles(note)

  return (
    <Card className={classes.card} elevation={0}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category ? note.category[0].toUpperCase() : 'N'}
          </Avatar>
        }
        action={
          <IconButton onClick={() => onDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default function Notes({ notes, onDeleteNote }) {
  return (
    <Container style={{ paddingTop: 20, paddingBottom: 20 }}>
      {notes.length === 0 ? (
        <Typography color="textSecondary" variant="h6" align="center" style={{ marginTop: 40 }}>
          No notes available. Click "Create Note" to add one!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} onDelete={onDeleteNote} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}
