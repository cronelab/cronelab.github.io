import Reach from 'react'

const SPES = () => {
return(
    <>
    <div class="container">

<div id="navbar"></div>

<h3>Epileptogenic Network Connectivity</h3>
<div class="row">
    <div class="col">
        <p><img src="Pictures/SeizureConnectivity2014Paper.png" class="img-fluid" style="max-width: 40%; display: inline; float: right; padding-left:10px;"/>
            Epilepsy is fundamentally a disease that affects neuronal networks. Focal seizures, in particular, may arise from
            the abnormal dynamics of networks within the epileptogenic zone, as well as abnormal network dynamics outside this
            zone that facilitate seizure propagation to other brain regions. Structural connections are assumed to play a
            permissive role in both normal and abnormal dynamics, while physiological interactions among neurons and their
            networks play an active role in shaping network dynamics. These physiological interactions can be conceptually
            divided into functional connectivity and effective connectivity, both of which are potentially important to
            understanding the normal and abnormal dynamics of human cortical networks.
        </p>
    </div>
</div>
<div class="row" style="padding-top:20px">
    <div class="col">
        Under normal circumstances, spatially distributed cortical regions may: a) couple their activity to jointly process
        or represent information (functional connectivity), or b) propagate activity from one brain region to another
        region whose processing depends on the first region's output (effective connectivity). In epilepsy, the
        neurophysiological mechanisms responsible for both functional and effective connectivity may be "hijacked" by
        hypersynchronous activity and its propagation during seizures, as well as activity-dependent plasticity that
        strengthen the functional and effective connectivity of epileptogenic networks.
    </div>
</div>
<div class="row" style="padding-top:20px">
    <div class="col">
        <p><img src="Pictures/Connectivity2014SummaryImage.png" class="img-fluid" style="max-width: 45%; display: inline; float: left; padding-right:10px;"/>
            Functional connectivity is usually measured with band-limited phase-locking values or coherence. Effective
            connectivity has been measured in model-free systems (e.g. EEG/MEG, ECoG) with a variety of methods, including
            transfer entropy, permutation conditional mutual information, and those based on causality in the Granger sense,
            where one can consider an observed time series x(t) to have a causal effect on another time series y(t), if
            knowledge of x(t)'s past significantly improves prediction of y(t) (Granger, 1969). Using the concept of Granger
            causality, we have created an event-related causality measure (ERC) for our ECoG studies of human cortical
            networks and their dynamics during cognitive tasks and during seizures. In our studies of the network dynamics of
            spoken word production, for example, we have reasoned that neural activity at any given processing stage is more
            likely critical to task performance if it has a causal impact on activity at downstream processing stages,
            ultimately culminating in response (e.g. articulatory) processing. In our studies of epileptic networks, on the
            other hand, we have reasoned that the dynamics by which ictal activity propagates will reveal the effective
            connectivity of epileptic brain networks and identify nodes in these networks that are relevant for surgical
            planning. In both cases, we have focused on high frequency activity because of its established correlation with
            population firing rates, as well as the preponderance of high frequency oscillations (HFOs) in the ictal onset
            zone. In reviewing the results of these studies, we explore the possibilities of discriminating epileptic networks
            from the networks that support normal cognition.</p>
    </div>
</div>
<hr />
<div class="footer">
    <p>&copy; 2019, Johns Hopkins University</p>
</div>
</div>
    </>
)
}

export default SPES;