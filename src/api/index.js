import {service} from './axios'
const url = '/commonservice-system/swagger2/say/'

export const getCountProDataByPqnameGroup = () => {
    return service({
        url: url + 'getCountProDataByPqnameGroup'
    })
}


export const getProjectCountInfo = () => {
    return service({
        url: url + 'getProjectCountInfo'
    })
}


export const getFiveClassZjAndSsxm = () => {
    return service({
        url: url + 'getFiveClassZjAndSsxm'
    })
}


export const getMajorShuixiAndRiverData = () => {
    return service({
        url: url + 'getMajorShuixiAndRiverData'
    })
}

export const getProlistByareAndtype = () => {
    return service({
        url: url + 'getProlistByareAndtype'
    })
}

export const getPqContentByPqname = pqname => {
    return service({
        url: url + 'getPqContentByPqname?pqname=' + pqname
    })
}

export const getXmInfoByProId = proId => {
    return service({
        url: url + 'getXmInfoByProId?proId=' + proId
    })
}

