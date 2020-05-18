
  //'child_removed'
  database.ref('expenses').on('child_removed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
  });

  // 'child_changed'
  database.ref('expenses').on('child_changed', (snapshot)=>{
 console.log(snapshot.key, snapshot.val());
  })

  //child_added

  database.ref('expenses').on('child_added', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
  })

   
//   database.ref('expenses')
//  .on('value' ,(snapshot)=>{
//  const val = snapshot.val();
 
//  })
//   snapshot.forEach((childSnapshot)=>{
//  expenses.push({
//      id: childSnapshot.Key,
//      ...childSnapshot.val()
//  });
// });
//   console.log(expenses);
// });

// database.ref('expenses').on('value' , (snapshot)=>{
//  const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//  expenses.push({
//      id: childSnapshot.Key,
//      ...childSnapshot.val()
//  });
// });
//   console.log(expenses);
// });
   

    database.ref('expenses').push({
 description: 'rent',
 note: 'pay  rent asap',
 amout: '200',
 createdAt: 'today'
  })
  

  // database.ref('notes').push({
  //   title:"course topics",
  //   body: 'react native , python , angular'
  // })
//   const firebaseNotes = {
//    notes: {
//      apapxpax:{
//       title: 'first note',
//       body:'this is my note'
//      },
//      apsoasso:{
//       title: 'another note',
//       body:'this is my note'
//      }
//    }
//   };
//   const notes = [{
//   id: '12',
//   title: 'first note',
//   body:'this is my note'
//   },
// {
//   id: '76e26',
//   title: 'another note',
//   body:'this is my note'
// }];

// database.ref('notes').set(notes);
//   //   database.ref().on('value', (snapshot)=>{
// // //  const val =snapshot.val();
// // // console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // //   });
// //    database.ref('location/city')
// // //    .once('value')
// // //   .then((snapshot)=>{
// // //    const val = snapshot.val();
// // //    console.log(val);
// // //   }).catch((e)=>{
// // //    console.log('Error fetching data', e);
// // //   })
// //   database.ref().set({
// //       name:'vivek gaur',
// //       age:19,
// //       stressLevel:6,
// //      job:{
// //    title: 'software developer',
// //    company:'google'
// //      },
// //       location:{
// //           city:'up',
// //           country:'india'
// //       }
// //   }).then(()=>{
// //       console.log('Data is saved!');
// //   }).catch((e)=>{
// //       console.log('this failed', e);
// //   });

// //   database.ref().update(
// //       {     stressLevel:9,
// //            'job/company': 'amazon',
// //            'location/city': 'seattle'
// //       }
// //   )   //update has to be passed by object
 
// // database.ref()
// // .remove()
// // .then(()=>{
// //     console.log('successfully removed');
// // }).catch((e)=>{
// // console.log('didnot removed', e)
// // })






