/*etape 1*/
db.student.insert({name: "veronique", ville: "paris"});

db.student.insert({name: "Steeven", ville: "lyon"});

db.student.insert({ name: "Marc", ville: "Marseille"});

db.student.insert({ name: "Nour", ville: "Lyon"});

db.student.insert({ name: "Romain", ville: "paris"});

db.student.insert({ name: "Sophie", ville: "paris"});

/*etape 2*/

db.favorites.insert({class:"Maths", Sport:"Cricket",student_id: ObjectId("60ba2ec5f6505417eccb7481")});

db.favorites.insert({class:"Music", Sport:"Hiphop",student_id: ObjectId("60ba2ec5f6505417eccb7485")});

db.favorites.insert({class:"Arts", Sport:"Boxing",student_id: ObjectId("60ba2ec4f6505417eccb7480")});


db.favorites.insert({class:"Literature", Sport:"Tennis",student_id: ObjectId("60ba2ec5f6505417eccb7482")});

db.favorites.insert({class:"Computer_science", Sport:"Tennis",student_id: ObjectId("60ba2ec5f6505417eccb7484")});

db.favorites.insert({class:"Arts", Sport:"Baseball",student_id: ObjectId("60ba2ec5f6505417eccb7483")});

/* etape 3*/



db.favorites.insert({class:"Maths", Sport:"Cricket",student_id: ObjectId("60ba2ec5f6505417eccb7481")});

db.favorites.insert({class:"Music", Sport:"Hiphop",student_id: ObjectId("60ba2ec5f6505417eccb7485")});

db.favorites.insert({class:"Arts", Sport:"Boxing",student_id: ObjectId("60ba2ec4f6505417eccb7480")});


db.favorites.insert({class:"Literature", Sport:"Tennis",student_id: ObjectId("60ba2ec5f6505417eccb7482")});

db.favorites.insert({class:"Computer-Science", Sport:"Tennis",student_id: ObjectId("60ba2ec5f6505417eccb7484")});

db.favorites.insert({class:"Arts", Sport:"Baseball",student_id: ObjectId("60ba2ec5f6505417eccb7483")});

/* etape 4*/

db.students_language.insert({student_id: ObjectId("60ba2ec4f6505417eccb7480"), language_id: ObjectId("60ba2a14f6505417eccb747b")})
db.students_language.insert({student_id: ObjectId("60ba2ec4f6505417eccb7480"), language_id: ObjectId("60ba2a14f6505417eccb747c")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7481"), language_id: ObjectId("60ba2a14f6505417eccb747b")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7481"), language_id: ObjectId("60ba2a14f6505417eccb747d")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7482"), language_id: ObjectId("60ba2a14f6505417eccb747b")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7483"), language_id: ObjectId("60ba2a14f6505417eccb747b")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7483"), language_id: ObjectId("60ba2a14f6505417eccb747c")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7483"), language_id: ObjectId("60ba2a14f6505417eccb747e")})

db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7483"), language_id: ObjectId("60ba2a14f6505417eccb747f")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7484"), language_id: ObjectId("60ba2a14f6505417eccb747b")})

db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7484"), language_id: ObjectId("60ba2a14f6505417eccb747f")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7485"), language_id: ObjectId("60ba2a14f6505417eccb747b")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7485"), language_id: ObjectId("60ba2a14f6505417eccb747c")})
db.students_language.insert({student_id: ObjectId("60ba2ec5f6505417eccb7485"), language_id: ObjectId("60ba2a14f6505417eccb747d")})



/*lvl*/ 
/*1*/
db.student.find(ObjectId("60ba2ec5f6505417eccb7482"));
/*2*/
db.student.find(ObjectId("60ba2ec5f6505417eccb7485"));




























