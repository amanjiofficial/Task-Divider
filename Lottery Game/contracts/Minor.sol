pragma solidity ^0.4.17;

contract Minor{
    address public mentor;
    struct Task
    {
        string name;
        uint no_of_tags;
        string[] tags;
        uint[] weightage;
    }
    struct Group_member
    {
        string name;
        uint rollno;
        address addr_student;
    }
    struct Project{
        string name;
        //Task[] t;
        //Group_member[] student;
    }
    Project[] public projects;
    Task[] public tasks;
    Group_member[] public members;
    function storage CreateNewproject(string name) public restricted
    {
        Project newproject=Project({
            name:name
        });
        projects.push(newproject);
    }
    function storage AddTask(string name,uint no_of_tags,string[] tags,uint[] weightage)
    {
       
    }
}