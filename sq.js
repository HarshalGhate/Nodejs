//find nuimber of cube or square
function square(iNo,n)
{
    iMult=1
    for(var i=1;i<=n;i++)
    {
        iMult=iMult*iNo;
    }
    console.log(iMult)
}
square(5,3)