pragma solidity ^0.4.0;
contract Project{
    address public mentor;
    uint public currtaskid;
    uint public currbiddone;
    uint public totalTasks;
    uint public totalAssigned;
    struct Preference
    {
        uint pref;
    }
    struct assignedtask
    {
        uint tid;
        address assignaddr;
        uint assignverify;
        bool assignstatus;
        string tname;
        string pname;
    }
    struct Task
    {
        string name;
        string tags;
    }
    struct Group_member
    {
        string name;
        uint rollno;
        uint bal;
        bool currbidstat;
        uint toverify;
    }
    struct Certification
    {
        string links;
        uint taskid;
        address gmemaddr;
        uint verified;
        bool verstatus;
    }
    
    Task[] public tasks;
    mapping(address => Group_member) public g_members;
    address[] public g_member_addr;
    Certification[] public certification;
    mapping(address => Preference) public prefer;
    assignedtask[] public tempassign;
    function addmember(uint rno, string memname, address memaddr)
    {
        address memadd = memaddr;
        g_member_addr.push(memadd);
        g_members[memadd].bal = 1000;
        g_members[memadd].rollno = rno;
        g_members[memadd].name = memname;
        g_members[memadd].currbidstat = false;
        g_members[memadd].toverify = 0;
    }
    function addtask(string tname, string tag)
    {
        tasks.push(Task({
            name: tname,
            tags: tag
        }));
        totalTasks+=1;
    }
    function addcerti(string link, uint tid)
    {
	    address memadd = msg.sender; //to ensure a person can add certificate only for himself
        certification.push(Certification({
            links: link,
            taskid: tid,
            gmemaddr: memadd,
            verified: 0,
            verstatus: false
        }));
    }
    function verifycertificate(uint cid)
    {
        if(msg.sender!=certification[cid].gmemaddr)
        {
            // to ensure user cannot verify his own certificate
            g_members[msg.sender].toverify+=1;
            certification[cid].verified = certification[cid].verified + 1;
            uint tverified = ((g_member_addr.length-1)/2);
            if(certification[cid].verified>=tverified)
            {
                certification[cid].verstatus = true;
            }
        }
    }
    function addPreference(uint prefe)
    {
        address memberaddr = msg.sender;
        if(g_members[memberaddr].currbidstat == false)
        {
            prefer[memberaddr].pref = prefe;
            currbiddone = currbiddone + 1;
            g_members[memberaddr].currbidstat = true ;
        }
        if(currbiddone == g_member_addr.length)
        {
            uint mx;
            uint mid;
            uint mid2;
            bool tie;
            tie = false;
            for(uint i=0;i<g_member_addr.length;i++)
            {
                if(prefer[g_member_addr[i]].pref>mx)
                {
                    if(g_members[g_member_addr[i]].bal - prefer[g_member_addr[i]].pref > 0) //to ensure preference not more than available balance
                    {
                        mx=prefer[g_member_addr[i]].pref;
                        mid=i;
                    }
                }
            }
            for(uint p=0;p<g_member_addr.length;p++)
            {
                if(prefer[g_member_addr[p]].pref==mx && p!=mid)
                {
                    mid2 = p;
                    tie = true;
                    break;
                }
            }
            if(tie == true)
            {
                for(uint s = 0; s < certification.length; s++)
                {
                    if((certification[s].gmemaddr == g_member_addr[mid2]) && (certification[s].verstatus == true))
                    {
                        mid = mid2;
                        break;
                    }
                }
            }
            tempassign.push(assignedtask({
                                    tid: currtaskid,
                                    assignaddr: g_member_addr[mid],
                                    assignverify: 0,
                                    assignstatus: false,
                                    pname:g_members[g_member_addr[mid]].name,
                                    tname:tasks[currtaskid].name
                                }));
            totalAssigned+=1;
            g_members[g_member_addr[mid]].bal = g_members[g_member_addr[mid]].bal - mx;
            for(uint k = 0; k<g_member_addr.length;k++)
            {
                g_members[g_member_addr[k]].currbidstat = false;
            }
            currbiddone = 0;
            currtaskid = currtaskid + 1;
        }
    }
}
