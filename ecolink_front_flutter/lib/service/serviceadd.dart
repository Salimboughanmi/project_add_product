import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';

class ExempleApi extends StatefulWidget {
  const ExempleApi({super.key});

  @override
  State<ExempleApi> createState() => _ExempleApiState();
}

class _ExempleApiState extends State<ExempleApi> {
  List data = [];
  bool loading = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("salim exemple API ;)"),
          backgroundColor: Colors.cyanAccent),
      body: ListView(
        children: [
          Container(
            padding: EdgeInsets.all(50),
            child: MaterialButton(
              onPressed: () async {
                loading = true; // on peut le mettre dans set state
                setState(() {});
                var response = await get(
                    Uri.parse("https://jsonplaceholder.typicode.com/posts"));
                var responseData = jsonDecode(response.body);
                //print(responseData);
                data.addAll(responseData);
                loading = false; // on peut le mettre dans set state
                setState(() {});
              },
              child: Text("cliquer ici pour GET API"),
              color: Color.fromARGB(255, 22, 163, 22),
            ),
          ),
          if (loading)
            Center(
              child: CircularProgressIndicator(),
            ),
          ...List.generate(
              data.length,
              (index) => Card(
                    child: ListTile(
                      leading: Text("${data[index]["id"]}"),
                      title: Text("${data[index]["title"]}"),
                    ),
                  ))
        ],
      ),
    );
  }
}
